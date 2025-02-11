const apiKey = 'wmTOxy7L04iD1a1xlnS7YCtEzi532F2o'

const getImage = async() => {
  const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  const { data } = await request.json()
  const { url } = data.images.original
  const img = document.createElement('img')
  
    img.src = url

    document.body.append(img)

}

getImage()