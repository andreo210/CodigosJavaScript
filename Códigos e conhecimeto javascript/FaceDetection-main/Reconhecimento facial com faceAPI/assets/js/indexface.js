

//####################> 1º passo Criar as promisses para ser carregadas <#################################
const cam = document.getElementById('cam')
     const caminhosDasModels = ''

//criar um arra de promisses eles são carregados antes de qualquer codigos do java script
 Promise.all([ // Retorna apenas uma promisse quando todas já estiverem resolvidas
 faceapi.nets.tinyFaceDetector.loadFromUri('/assets/lib/models'), // serve para detectar rosto
 faceapi.nets.faceLandmark68Net.loadFromUri('assets/lib/model/'), // serve para pegar os traços do rosto
 faceapi.nets.faceRecognitionNet.loadFromUri('assets/lib/model/'), //reconhecimento do rosto 
 faceapi.nets.faceExpressionNet.loadFromUri('assets/lib/model/') // Vai permitir a api saber suas expressões. Ex: se esta feliz, triste, com raiva, etc...

    //ja da start na wueb cam com método startvideo
]).then(startVideo)


async function startVideo() {
    // Inicia o rastreamento
    const constraints = { video: true };
    
    try {
        //fazer o uso da web cam
        let stream = await navigator.mediaDevices.getUserMedia(constraints);

        //aqui eu consigo acessar o objeto id definido na tag video no html
        //e consigo accessa a webcam
        cam.srcObject = stream;
        cam.onloadedmetadata = e => {
        cam.play();
        }

        //caso deu erro na conexão
    } catch (err) {
        console.error(err);
    }
}