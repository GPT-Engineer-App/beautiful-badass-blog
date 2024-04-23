import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  { id: 1, title: "First Post", content: "This is the first post content." },
  { id: 2, title: "Second Post", content: "This is the second post content." },
  { id: 3, title: "Third Post", content: "This is the third post content." },
];

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-10">Badass Blog</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardContent>
            <CardTitle>{post.title}</CardTitle>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>
              <Button variant="outline" className="mt-4">
                Read More
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Post() {
  const [post, setPost] = useState(null);

  return (
    <div>
      <Card>
        <CardContent>
          <CardTitle>{post?.title}</CardTitle>
          <p>{post?.content}</p>
          <Link to="/">
            <Button variant="outline" className="mt-4">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
