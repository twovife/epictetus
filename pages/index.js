import Head from "next/head";
import { useState } from "react";
import CardPost from "../components/CardPost";
import Container from "../components/Container";
import FeaturedPost from "../components/FeaturedPost";
import Layout from "../components/Layout";
import { data } from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(data);
  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => (
            <div key={post.id} className="col-span-1 mb-3">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
