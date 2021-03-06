var posts = [{ title: 'First Post', content: 'This is the first post!' }];

exports.getPosts = (req, res, next) => {
  res.status(200).json(posts);
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  posts.push({title: title, content: content });

  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};