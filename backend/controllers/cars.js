

const Cars = require('./models/cars'); 
const User = require('./models/user'); 

module.exports = {
 
    createComment,
    register,
    login,
    getAllPosts,
    createPost,
    createComment,
    delete: destroy,
    update,
  };
  

const register = async (req, res) => {
  try {

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering a user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const login = async (req, res) => {
  try {

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getAllPosts = async (req, res) => {
  try {

    const posts = await Cars.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const createPost = async (req, res) => {
  try {
 
    const { name, image, title } = req.body;
    const newPost = new Cars({ name, image, title });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating a post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createComment = async (req, res) => {
  try {

  } catch (error) {
    console.error('Error creating a comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
    try {
      
      const { name, image, title } = req.body;
      const updatedCar = await Cars.findByIdAndUpdate(req.params.id, { name, image, title }, { new: true });
      if (!updatedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json(updatedCar);
    } catch (error) {
      console.error('Error updating a car:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  const destroy = async (req, res) => {
    try {
      
      const deletedCar = await Cars.findByIdAndRemove(req.params.id);
      if (!deletedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json(deletedCar);
    } catch (error) {
      console.error('Error deleting a car:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
