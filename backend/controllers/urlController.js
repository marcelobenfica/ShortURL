const {URL: urlModel} = require("../models/Url")


const urlController = {
  create: async(req,res) => {
    try {
      const longURL = req.body.longURL
      NanoID()

      function NanoID(){
        import('nanoid').then(({ nanoid }) => {
          const id = nanoid(8)
          const shortURL = "http://localhost:3000/api/urls/" + id 
          // const shortURL = "www.shortURL/" + id 
          
          CreateURL(shortURL)
        });
      }

      async function CreateURL(shortURL){
        try {
          const url = [{longURL, shortURL}]
          const response = await urlModel.create(url);
          return res.status(201).json({response, msg: "URL encurtada com sucesso"})
        } catch (error) {
          NanoID()
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  },

  get: async(req,res) => {
    try {
      const id = req.params.id;
      if (!id || id.length != 8){
        return res.status(502).json({msg: "ID inválido"})
      }
      const shortURL = "http://localhost:3000/api/urls/" + id 

      //const shortURL = "www.shortURL/" + id
      const url = await urlModel.findOne({shortURL});
      if (!url){
        return res.status(502).json({msg: "ID inválido"})
      }
      return res.redirect(url.longURL);
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = urlController;