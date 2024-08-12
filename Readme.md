# Requirement outline

- [ ] Create single type and collection type
- [ ] Have fixed roles: Super admin, admin, author, public
- [ ] Permission:
    - [ ] Collection type:
        - [ ] Public permission: Find all, find one record
        - [ ] author permission: Create, update, delete record
        - [ ] (Super) Admin: Create, update, delete, publish type
    - [ ] Single type:
        - [ ] Public permission: Find
        - [ ] Author permission: Update record
        - [ ] (Super) Admin: Create, update, delete, publish type
    - [ ] Role: 
        - [ ] Super Admin: Create admin and author
        - [ ] Admin: Create author
        - [ ] Author: none
- [ ] Component
  - [ ] Basic composition
  - [ ] Nested component
- [ ] Sharable
  - [ ] Build from scratch
  - [ ] Build from existing codebase (i.e from a github repo)


# Generated code structure
- /src
  - /api
    - /[...type name here]
      - schema.json
      - routes.js
      - controller.js
      - /migration
        - [...vXXX]
  - /components
    - /[...component catagory]
      - /[component name]
        - schema.json
        - /migration
          - [...vXXX]