// Example 1: Partial<Type>
// Description: Constructs a type with all properties of Type set to optional.
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
  name: "John Doe", // Only updating the name
};

// Example 2: Readonly<Type>
// Description: Constructs a type with all properties of Type set to readonly.
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

// readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property.

// Example 3: Pick<Type, Keys>
// Description: Constructs a type by picking a set of properties Keys from Type.
type UserPreview = Pick<User, "id" | "name">;

const userPreview: UserPreview = {
  id: 1,
  name: "John Doe",
};

// Example 4: Omit<Type, Keys>
// Description: Constructs a type by omitting a set of properties Keys from Type.
type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
  id: 2,
  name: "Jane Doe",
};

// Example 5: Record<Keys, Type>
// Description: Constructs a type with a set of properties Keys of a given Type.
type Role = "admin" | "editor" | "viewer";
type Permissions1 = Record<Role, boolean>;

const rolePermissions: Permissions1 = {
  admin: true,
  editor: false,
  viewer: true,
};

// Example 6: Exclude<Type, ExcludedUnion>
// Description: Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.
type Primitive = string | number | boolean;
type NonString = Exclude<Primitive, string>;

const value: NonString = 42; // Can be number or boolean, but not string

// Example 7: Extract<Type, Union>
// Description: Constructs a type by extracting from Type all union members that are assignable to Union.
type OnlyString = Extract<Primitive, string>;

const stringValue: OnlyString = "Hello";

// Example 8: NonNullable<Type>
// Description: Constructs a type by excluding null and undefined from Type.
type NullableUser = User | null | undefined;
type NonNullableUser = NonNullable<NullableUser>;

const validUser: NonNullableUser = {
  id: 3,
  name: "Alice",
  email: "alice@example.com",
};

// Example 9: ReturnType<Type>
// Description: Constructs a type consisting of the return type of function Type.
function getUser(): User {
  return { id: 4, name: "Bob", email: "bob@example.com" };
}

type GetUserReturnType = ReturnType<typeof getUser>;

const returnedUser: GetUserReturnType = getUser();

// Example 10: Parameters<Type>
// Description: Constructs a tuple type of the types of the parameters of function Type.
function updateUserDetails(id: number, email: string): void {
  console.log(`Updating user ${id} with email ${email}`);
}

type UpdateUserDetailsParams = Parameters<typeof updateUserDetails>;

const params: UpdateUserDetailsParams = [1, "new.email@example.com"];
updateUserDetails(...params);
