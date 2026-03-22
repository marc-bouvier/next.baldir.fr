---
layout: post
title: Update partially ressource with JSON Path and SpringBoot 2
description: Implémentation personnalisée partielle de JSON Path pour mise à jour partielle de ressource. En n'autorisant que certains attributs.
tags:
  - JSONPath
  - SpringBoot
  - Java
  - Rest
  - French
date: 2018-04-16
date_updated: 2026-03-22T17:19
---
Implémentation personnalisée partielle de JSON Path pour mise à jour partielle de ressource. En n'autorisant que certains attributs.

TODO : GIST & blog

REST Ressource

```
@RestController
@RequestMapping("/api/someResource")
public class SomeRestController {

    @PatchMapping(value = "/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<Object> updatePartially(@PathVariable("id") Long id, @RequestBody PartialUpdateRequestDto partialUpdate) {

        try {
            return ResponseEntity.ok(someService.updatePartially(id, partialUpdate));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
```


Request body + Implementation of JSON Path is enforced by enum value-objects

```
@Data
@NoArgsConstructor
public class PartialUpdateRequestDto {
    private List<Patch> changes;

    public enum AllowedPath {
        //
        SOME_FIELD("/someField", Boolean.class, null, false, false);

        private final boolean multivalues;
        private String path;
        private Class type;
        // For basic generic types (Ex.  List<String>, type = List.class, templateValue = String.class)
        private Class templateValue;
        private boolean removeable;

        AllowedPath(String path, Class type, Class templateValue, boolean removeable, boolean multiValues) {
            this.path = path;
            this.type = type;
            this.templateValue = templateValue;
            this.removeable = removeable;
            this.multivalues = multiValues;
        }

        // Required for automatic swagger documentation of available paths
        @JsonCreator
        public AllowedPath fromPath(String path) {
            return Stream.of(values())
                    .filter(enumPath -> enumPath.getPath().equals(path))
                    .findFirst().orElseThrow(() -> new IllegalArgumentException(
                            "Illegal Path for partial update : path=\"" + path + "\""));
        }

        // Required for automatic swagger documentation of available paths
        @JsonValue
        public String getPath() {
            return path;
        }

        public boolean isRemoveable() {
            return removeable;
        }

        public boolean isMultivalues() {
            return multivalues;
        }

        public Class getType() {
            return type;
        }

    }

    /**
     * @see <a href="https://tools.ietf.org/html/rfc6902">JavaScript Object Notation (JSON) Patch</a>
     */
    @Data
    public static class Patch {

        private Operation op;
        private AllowedPath path;
        private List<Object> value;

        @JsonCreator
        private Patch(
                @JsonProperty("op") Operation op,
                @JsonProperty("path") AllowedPath path,
                @JsonProperty("value") List<Object> value) {
            if (op == null) {
                throw new IllegalArgumentException("Operator is compulsory");
            }
            if (path == null) {
                throw new IllegalArgumentException("Path is compulsory");
            }
            if (op.requiresValue() && (value == null || value.isEmpty())) {
                throw new IllegalArgumentException("This operator requires a value");
            }
            this.op = op;
            this.path = path;
            this.value = value;
        }

        /**
         * @see <a href="https://tools.ietf.org/html/rfc6902">JavaScript Object Notation (JSON) Patch</a>
         */
        public enum Operation {
            REPLACE("replace") {
                @Override
                public boolean requiresValue() {
                    return true;
                }
            }, REMOVE("remove") {
                @Override
                public boolean requiresValue() {
                    return false;
                }
            };
            String name;

            Operation(String name) {
                this.name = name;
            }

            @JsonCreator
            public Operation fromName(String operationName) {
                return Stream.of(values())
                        .filter(enumOperation -> enumOperation.getName().equals(operationName))
                        .findFirst().orElseThrow(() -> new IllegalArgumentException(
                                "Illagal operation for partial update of the ressource : operation=\"" + operationName + "\""));
            }

            public abstract boolean requiresValue();

            @JsonValue
            String getName() {
                return name;
            }
        }
    }
}
```


// SomeServiceImpl

```
    @Override
    public List<String> updatePartially(Long id, PartialUpdateRequestDto partialUpdate) throws ResourceNotFoundException {
        if (id == null) {
            throw new IllegalArgumentException("Id is required to update resource");
        }
        if (partialUpdate == null) {
            throw new IllegalArgumentException("PartialUpdate object required");
        }
        List<String> result = new ArrayList<>();
        final Optional<SomeJpaEntity> optionalEntity = someDao.findById(id);
        if (entity.isPresent()) {
            final SomeJpaEntity entity = optionalEntity.get();
            partialUpdate.getChanges().forEach(patch -> result.add(applyPatchOperationToEntity(entity, patch)));
            someDao.save(entity);
            return result;
        } else {
            throw new ResourceNotFoundException(id);
        }
    }

    private String applyPatchOperationToEntity(SomeEntity entity, PartialUpdateRequestDto.Patch patch) {
        switch (patch.getOp()) {
            case REMOVE:
                return removeValueFromEntity(entity, patch);
            case REPLACE:
                return replaceValueFromEntity(entity, patch);
            default:
                throw new IllegalArgumentException("opérateur non supporté : " + patch.getOp());
        }
    }

    private String replaceValueFromEntity(SomeEntity entity, PartialUpdateRequestDto.Patch patch) {
        try {
            Object rawValue;
            if (!patch.getPath().isMultivalues()) {
                rawValue = patch.getValue().get(0);
            } else {
                rawValue = patch.getValue();
            }
            switch (patch.getPath()) {
                case SOME_FIELD:
                    entity.setSomeField((Boolean) rawValue);
                    break;
                default:
                    throw new IllegalArgumentException("Replacement not supported for value : " + patch.getPath());
            }
            return patchResultMessage(patch);
        } catch (ClassCastException e) {
            throw new IllegalArgumentException("Invalid type received for \"" + patch.getPath() + "\" . Expected : " + patch.getPath().getType(), e);
        }
    }

    private String removeValueFromEntity(SomeEntity entity, PartialUpdateRequestDto.Patch patch) {
        if (!patch.getPath().isRemoveable()) {
            throw new IllegalArgumentException("This value cannot be removed : " + patch.getPath());
        }
        switch (patch.getPath()) {

            case SOME_FIELD:
                // Not removeable
                break;
            default:
                throw new IllegalArgumentException("Illegal path : " + patch.getPath());
        }
        return patchResultMessage(patch);
    }

    private String patchResultMessage(PartialUpdateRequestDto.Patch patch) {
        String s = "Value ";
        s += patch.getPath();
        s += " has been ";
        s += patch.getOp();
        if (patch.getOp().requiresValue()) {
            s += " with : ";
            s += patch.getValue();
        }
        return s;
    }
```
