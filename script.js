let mainBody = document.getElementById('main');

console.log(mainBody , 77)

  const playlist = [

        { title: "Sweet", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
              { title: "Sweet s", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
                    { title: "Sweet Dre", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
                          { title: " Dreams", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
                                { title: "et Dreams", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
                                

  ];
  
  console.log(playlist);
  playlist.forEach((value, index) => {

    let container =  
    document.createElement('mainconc');
    container.classList.add('mainconc')
    
    
    
    
    
          let imageContainer = document.createElement('imgdiv');
          imageContainer.classList.add('imgdiv');
          
          let imgs = document.createElement('img')
          
          imgs.classList.add('img')
          imgs.src = 'img/playList.jpg'
    
          //first flex sha
      
      let sectionOne = document.createElement('firstdiv')
      sectionOne.classList.add('firstdiv')
      
      
      
      const  titles = document.createElement('h2');
      titles.textContent = ` Title: ${value.title}`;
      
     console.log(titles.textContent , 8);
     
     const genres = document.createElement('p')
         genres.textContent = `Genre: ${value.genre}`;
         
         console.log(genres.textContent,  9);
    
    const artists = document.createElement('p')
    artists.classList.add('art')
    artists.textContent = `Artist name: ${value.artist}`;
    
    console.log(artists.textContent, 100);

    let range = document.createElement('input')
    range.type = 'range';
    range.classList.add('range')
    
    console.log(range.type);
    
    let timer = document.createElement('div')
    timer.classList.add('timer')
    
    
    let start = document.createElement('p')
    start.textContent = 0.00
    
    
    console.log(start.textContent,  'ik');
    
    let end = document.createElement('p')
    
    end.textContent = value.duration
    
    console.log(end.textContent,  100);
    
    let forward = document.createElement('img')
 forward.classList.add('forward')
    forward.src = 'img/20250405_012944~2.png'
 
    imageContainer.appendChild(imgs)
    sectionOne.appendChild(titles)
    sectionOne.appendChild(genres)
    timer.appendChild(start)
    timer.appendChild(end)

    container.appendChild(imageContainer)
        container.appendChild(sectionOne)
    container.appendChild(artists)
    container.appendChild(range)
    container.appendChild(timer)
    container.appendChild(forward)
    mainBody.appendChild(container)
  })
