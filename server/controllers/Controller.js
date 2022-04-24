require('../models/database');
const Category = require('../models/Archives');
const Thoughts = require('../models/Thoughts');
/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {

  
    const limitNumber = 6;
    const Archives = await Category.find({}).limit(limitNumber);
    const latest = await Thoughts.find({}).sort({_id: -1}).limit(limitNumber);
    const thoughts = { latest };

    res.render('index', { title: 'NJIT HIGHLANDER - HOME', Archives, thoughts} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}
/**
 * GET /chatbot
 * Submit Thoughts
*/



/**
 * GET /submit-Thoughts
 * Submit Thoughts
*/
exports.submitThoughts = async(req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit-Thoughts', { title: 'NJIT HIGHLANDER - Submit Thoughts', infoErrorsObj, infoSubmitObj  } );
}

/**
 * POST /submit-Thoughts
 * Submit Thoughts
*/
exports.submitThoughtsOnPost = async(req, res) => {
  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      })

    }

    const newThoughts = new Thoughts({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName
    });
    
    await newThoughts.save();

    req.flash('infoSubmit', 'Thoughts has been added.')
    res.redirect('/submit-Thoughts');
  } catch (error) {
    // res.json(error);
    req.flash('infoErrors', error);
    res.redirect('/submit-Thoughts');
  }
}




// Delete Thoughts
// async function deleteThoughts(){
//   try {
//     await Thoughts.deleteOne({ name: 'New Thoughts From Form' });
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteThoughts();


// Update Thoughts
// async function updateThoughts(){
//   try {
//     const res = await Thoughts.updateOne({ name: 'New Thoughts' }, { name: 'New Thoughts Updated' });
//     res.n; // Number of documents matched
//     res.nModified; // Number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateThoughts();


/**
 * Dummy Data Example 
*/

// async function insertDymmyCategoryData(){
 //  try {
// await Category.insertMany([
//  {
//    "name": "Baseball",
//     "image": "vurpillat.png",
//     "description":"Vurpillat's Gem Leads NJIT to Shutout Victory vs. Hartford"
 //   },
 //   {
  //   "name": "Baseball",
  //   "image": "groupbaseball.png",
   //  "description":" NJIT Dominates Hartford, 15-1, in  America East Conference Opener"

   // }, 
   //  {
   //   "name": "Men's Tennis",
   // "image": "tennis.png",
   // "description":" Men's Tennis Falls to Incrate Word in Spring Break Finale in Texas"
   // },
  //  {
   //  "name": "Men's Laccrosse",
    //  "image": "laccrosse.png",
    //  "description": "Men's Laccrosse Opens America East Play Saturday Afternoon Against Vermont"

  //  }, 
  //  {
  //   "name": "Men's Volleyball",
   //   "image": "volleyball.png",
    //  "description": "No. 15 NJIT Moves back into the win column; Sweeps Charleston in EIVA ..."
  //},
// {
 //  "name": "Women's Tennis",
  //   "image": "tennis1.png",
   //  "description": "Women's Tennis Ends Spring Break with Win Over Incarnate Word"
// },
 //{
 //  "name": "Baseball",
  //   "image": "baseball1.png",
   //  "description": "Highlanders Open Home, Conference Slate This Weekend vs. Hartford"
 //}
 //  ]);
 // } catch (error) {
 //   console.log('err', + error)
 // }
//}

//insertCountdownData();
 //async function insertDymmyCountdownData(){
 // try {
 //await Category.insertMany([
 // {
 //   "days": "Dec"
     
 //   },
   // {
  //  "hour":"22"
      
 //   },
 //   {
 //   "seconds":"30"
      
 //   },
 //   {
 //   "minutes":"1"
        
 //   }
   
 //   {
  //   "name": "Baseball",
  //   "image": "groupbaseball.png",
   //  "description":" NJIT Dominates Hartford, 15-1, in  America East Conference Opener"

   // }, 
   //  {
   //   "name": "Men's Tennis",
   // "image": "tennis.png",
   // "description":" Men's Tennis Falls to Incrate Word in Spring Break Finale in Texas"
   // },
  //  {
   //  "name": "Men's Laccrosse",
    //  "image": "laccrosse.png",
    //  "description": "Men's Laccrosse Opens America East Play Saturday Afternoon Against Vermont"

  //  }, 
  //  {
  //   "name": "Men's Volleyball",
   //   "image": "volleyball.png",
    //  "description": "No. 15 NJIT Moves back into the win column; Sweeps Charleston in EIVA ..."
  //},
// {
 //  "name": "Women's Tennis",
  //   "image": "tennis1.png",
   //  "description": "Women's Tennis Ends Spring Break with Win Over Incarnate Word"
// },
 //{
 //  "name": "Baseball",
  //   "image": "baseball1.png",
   //  "description": "Highlanders Open Home, Conference Slate This Weekend vs. Hartford"
 //}
 //// ]);
// } catch (error) {
 //  console.log('err', + error)
 //}
//}

//insertDymmyCountdownData();


// async function insertDymmyThoughtsData(){
//   try {
//     await Thoughts.insertMany([
//       { 
//         "name": "Thoughts Name Goes Here",
//         "description": `Thoughts Description Goes Here`,
//         "email": "Thoughtsemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//       { 
//         "name": "Thoughts Name Goes Here",
//         "description": `Thoughts Description Goes Here`,
//         "email": "Thoughtsemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDymmyThoughtsData();
