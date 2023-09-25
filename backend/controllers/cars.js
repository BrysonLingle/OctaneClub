



module.exports = {
	index,
	create,
	show,
    delete: destroy,
    update
}


async function index(req,res,next) {
	try {
 
    res.json(await Cars.find({}));
  } catch (error) {
   
    res.status(400).json(error);
  }
};

async function create(req,res,next) {
  try {

    res.json(await Cars.create(req.body));
  } catch (error) {
    
    res.status(400).json(error);
  }
};


async function show(req,res,next) {
    try {
        // send one person
        res.json(await Cars.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

async function destroy(req,res,next) {
    try {
      
      res.json(await Cars.findByIdAndRemove(req.params.id));
    } catch (error) {
     
      res.status(400).json(error);
    }
  };
  

  async function update(req,res,next) {
    try {
   
      res.json(
        await Cars.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      
      res.status(400).json(error);
    }
  };
  