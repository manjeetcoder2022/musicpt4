var song_1= ""
var song_2=""
var song_1_play=""
var leftWristY=0
var rightristY=0
function preload(){

}
function setup(){
 

    canvas= createCanvas(500,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet= ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes)
    
}
    
    

function modelloaded(){
    console.log("Successfully model loaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        leftWristY= results[0].pose.keypoints[9].score
        rightristY= results[0].pose.keypoints[10].score
       
        console.log("leftWrist Y " + leftWristY)
        console.log("rightWrist Y " + rightristY)
    }
}

    song_1_status="off"

    document.getElementById("first_control").pause()
    
    function draw(){
        image(video,0,0,500,400)
        if(leftWristY > 0.5 && song_1_status=="off"){


    document.getElementById("first_control").play()
    song_1_status="play"
        }else if(song_1_status=="play" ){

            document.getElementById("first_control").stop()
        }
        
    
    }


        function play_1(){
            
            song_1= document.getElementById("select_song_1").value
            
           
            
            }
            
            
            
            function play_2(){
                
                song_2= document.getElementById("song_2").value
                
                if(song_2=="song_2_1"){
                
                    
                    document.getElementById("control_2").setAttribute('src',"Aaj Se Teri.mp3" );
                    console.log( document.getElementById("control_2").src)
                    document.getElementById("second_control").load()
                    document.getElementById("second_control").play()
                }else if(song_2=="song_2_2"){
                    document.getElementById("control_2").setAttribute('src',"DO GALLAN.mp3" );
                    console.log( document.getElementById("control_2").src)
                    document.getElementById("second_control").load()
                    document.getElementById("second_control").play()
                }else if(song_2=="song_2_3"){
                    document.getElementById("control_2").setAttribute('src',"narayam.mp3" );
                    console.log( document.getElementById("control_2").src)
                    document.getElementById("second_control").load()
                    document.getElementById("second_control").play()
                }else if(song_2=="song_2_4"){
                    document.getElementById("control_2").setAttribute('src',"Ik Mulaqaat -.mp3" )
                    console.log( document.getElementById("control_2").src)
                    document.getElementById("second_control").load()
                    document.getElementById("second_control").play()
                }else{
                    document.getElementById("control_2").setAttribute('src',"Aaj Se Teri.mp3" );
                    console.log( document.getElementById("control_2").src)
                    document.getElementById("second_control").load()
                    document.getElementById("second_control").play() 
                }
                
                
                }