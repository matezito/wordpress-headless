import Container from '../components/Container';
import { gql } from '@apollo/client';
import client from '../libs/client';

const Users = ( {users} ) => {
    return (
        <Container>
            Ususarios
        </Container>
    )
}

export async function getStaticProps()
{
    const { data } = await client.query({
        query: gql`
        query UsersQuery {
            users {
                edges {
                node {
                    email
                    name
                    lastName
                }
                }
            }
        }`
    });

    const users = data.users.edges.map((node) => node);

    return {
        props: {
            users
        }
    }
}

export default Users;