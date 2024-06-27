import Users from "@modules/users/entities/Users";

export default interface IUsersRepository {
    index(): Promise<Users[]>;
}