"use client";

import React from "react";
import { useAuth } from "@components/auth-provider";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const GET_NOTEBOOKS = gql`
query {
  notebooks {
    id
    title
    description
    owner {
      ... on PartialUser{
        id 
        username
      }
    }
  }
}
`;

const GET_OWNER = gql`
  query GetUser($userId: ID!) {
    owner: user(id: $userId) {
      id
      username
    }
  }
`;

interface Notebook {
  id: string;
  title: string;
  description: string;
  owner: Owner
}

interface Owner {
  id: string
  username: string
}

interface NotebooksData {
  notebooks: Notebook[];
}

export default function Page(): JSX.Element {
  
  
  const path = usePathname();
  const { loading, error, data } = useQuery<NotebooksData>(GET_NOTEBOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  data?.notebooks.map((notebook) => console.log(notebook.id));
  return (
    <div>
      {data?.notebooks.map((notebook) => {



        return (
          <Link href={`${path}/[id]`} as={`${path}/${notebook.id}`}>
            
              
              <div>{notebook.title}</div>
              <div>{notebook.description}</div>
              <div>{notebook.owner.username}</div>
          </Link>
        );
      })}
    </div>
  );
}
