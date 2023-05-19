

const cam = document.getElementById('cam');

const imgText = document.querySelector('#imageCanvas');//carrega o hidden text
const caminhosDasModels = ''

//####################> 1º passo Criar as promisses para ser carregadas <#################################

//criar um arra de promisses eles são carregados antes de qualquer codigos do java script e chama o méto para abrir a camera
Promise.all([ // Retorna apenas uma promisse quando todas já estiverem resolvidas
faceapi.nets.tinyFaceDetector.loadFromUri('/models'), // serve para detectar rosto
faceapi.nets.faceLandmark68Net.loadFromUri('/models'), // serve para pegar os traços do rosto
faceapi.nets.faceRecognitionNet.loadFromUri('/models'), //reconhecimento do rosto (quem é a pessoa)
faceapi.nets.faceExpressionNet.loadFromUri('/models'), // Vai permitir a api saber suas expressões. Ex: se esta feliz, triste, com raiva, etc...
faceapi.nets.ageGenderNet.loadFromUri('/models'),//idade e genero da  pessoa
faceapi.nets.ssdMobilenetv1.loadFromUri('/models')//para detectar o rosto desenhar o quadrado
   //ja da start na wueb cam com método startvideo
]).then(startVideo)



//####################> 2º passo Criar o método para carregar a camera <#################################
async function startVideo() {
    // Inicia o rastreamento
    const constraints = { video: true };

    try {
        //busca web cam
        let stream = await navigator.mediaDevices.getUserMedia(constraints);

         //aqui eu consigo acessar o objeto id definido na tag video no html
        //e consigo accessa a webcam
        cam.srcObject = stream;

        //ja da um play na hora que carrega
        cam.onloadedmetadata = e => {
        cam.play();
        }

        //caso deu erro na conexão
    } catch (err) {
        console.error(err);
    }
}

//####################> 3º passo criar o canvas e usar de fato o face api com os metodos para capturar as coisas que queremos <#################################

//###>criar o canvas, canvas é onde vamos pegar todoas as informações
cam.addEventListener('play',async()=> {
    //cria um canvas e atribui o campo de onde ele vai buscar as informaçoes no css colocamos esse canvas dentro do video
    const canvas = faceapi.createCanvasFromMedia(cam)
    
    //constante para dimensionar o tamanho do canvas
    const canvasSize = { width: cam.width, height: cam.height }

    //definindo o canvas com o tamanho da tag video
    faceapi.matchDimensions(canvas, canvasSize) // Igualando as dimensões do canvas com da nossa cam

    //adiciona uma tag html no corpo HTML
    document.body.appendChild(canvas)


//###> 3.1 passo criar os metodos para capturar as coisas que queremos 

setInterval(async () => { // Intervalo para detectar os rostos a cada 100ms
    
    //agora definimos qual algoritmo vamos usar para detectar o rosto e onde vamos detectar 
    const detections = await faceapi.detectAllFaces(
        cam, // Primeiro parametro é nossa camera o id da tag video
        new faceapi.TinyFaceDetectorOptions() // Qual tipo de biblioteca vamos usar para detectar os rostos
    ) 
     .withFaceLandmarks() // Vai desenhar os pontos de marcação no rosto
     .withFaceExpressions() // Vai determinar nossas expressões
     .withAgeAndGender()// vai determinar idade e sexo
     .withFaceDescriptors()

    //até aqui ela ja detecta imagen voce pode ver no 
    //console.log(detections)
    
    //aqui criamos uma variavel para ele detectar o rosto    
    const resizedDetections = faceapi.resizeResults(detections, canvasSize ) // Redimensionado as detecções
    
    // Apagando nosso canvas antes de desenhar outro
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height) 

    //aqui pedimos para ele desenhar o que detectou, primero onde que q ele desenhe (canvas) e o que que ele desenhe(resizedDetection)
    faceapi.draw.drawDetections(canvas, resizedDetections) // Desenhando decções
    
    //aqui ele pega os ponto de refencia boca, nariz
    //faceapi.draw.drawFaceLandmarks(canvas, resizedDetections) // Desenhando os pontos de referencia

    //aqui ele pega as expressoes da pessoa se esta feliz, com raiva, triste
    //faceapi.draw.drawFaceExpressions(canvas, resizedDetections) // Desenhando expressões

    //aqui ele captura a imagem e convert para base 64 voce pode ver //console.log(img)
    var img = canvas.toDataURL('image/jpg');    
    
    //var imageData = imageData.split(",");
    console.log(img)
    //escrever customizado quantos anos e sexo 
    resizedDetections.forEach(detection => {
        const { age, gender, genderProbability } = detection
        new faceapi.draw.DrawTextField([
            `${parseInt(age, 10)} anos`,
            `sexo : ${gender} (${parseInt(genderProbability * 100, 10)}) `
        ], detection.detection.box.topRight).draw(canvas)
    })

}, 1000);

})


//####################> 1º passo <#################################

//faz uma busca atraz de dispositivos conectados
navigator.mediaDevices.enumerateDevices()
    .then(device => {
        //faz uma verificação se existe
        if(Array.isArray(device)){
            // entro aqui então tem voce pode ver os dispositivos console.log(device)
           
            //ver se é uma web cam
            device.forEach(x => {
                    if(x.kind==='videoinput'){
                        //é uma camera
                        console.log(device)
                    }
            })
        }        
    })

//##################################################################################
