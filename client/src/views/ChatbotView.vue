<template>
    <div class="Chatbot">
      <div id="chatContainer">
  
  
  
      <div class="chatHeader">
       <img src="@/assets/mini.png" class="close-icon" @click="$router.push('/')"/>
      </div>
  
  
  
      <div class="chatBody" >
  
        <div class="messages" v-for="message in messages" :key = "message.id" >
          
  
          <div class="messageRow user" v-if="message.author == 'user'">
            <div class="userAvatar"></div>
            <div class="message userMessage">
              <p> {{message.message}} </p>
            </div>
          </div>
  
  
          <div class="messageRow bot" v-else>
            <div class="botAvatar"></div>
            <div class="message botMessage">
              <p> {{message.message}} </p>
            </div>
          </div>
        
          
       </div>
    
     </div>
  
     
     
     <div class="chatFooter" >
        <form @submit.prevent="sendMessage()">
          <input v-model="messageContent" id="input-message"/>
           <button type="submit" class="submit"></button> 
        </form>
      </div>
  
    
  
  
  
    </div>
  </div>
  
  </template>
  
  <script>
  import axios from "axios";
  import {ref} from "vue";
  export default {
  
    name: 'ChatBotView',
    setup() {
      const messages = ref([]);
      const buttons = ref([]);
      const messageContent = ref("");
      let id = null;
  
    //Sends the message on form submit and on click
    function sendMessage() {
        if (messageContent.value == "") return;
        createUserMessage(messageContent.value);
        getResponse(messageContent.value);
        messageContent.value = "";
      };
  
  
       //create user message
       function createUserMessage(message) {
        messages.value.push({
          message: message,
          id: id++,
          author: 'user',
        });
      };
  
  
      //create bot message
     function createBotMessage(message) {
        messages.value.push({
          message: message,
          id: id++,
          author: 'bot'
       });
      };
  
   
  
  
      async function getResponse(message) {

        const postData ={
         message: message
        };
  
        const {data} = await axios.post("http://localhost:5000/messages", postData);
        const {response} = data;
         createBotMessage(response);
         
        };
  
       

  
      
       
      return {id, messages, messageContent, sendMessage};
    }
    
  }
  
  </script>
  
  
  
  <style scoped>
  
  #chatContainer {
    height: 480px;
    width: 360px;
    padding: 0%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    border:1px solid rgb(195, 194, 206);
  }
  
  .chatHeader {
    position: absolute;
    top:0;
    left:0;
    width:360px;
    height:60px;
    background: linear-gradient(#e3a5e0,#b7eeff);
    margin-bottom: 5px;
  }
  
  .chatFooter {
    position: absolute;
    top: 425px;
    left:0;
    width: 360px ;
    height: 55px;
    background: linear-gradient(180deg,rgb(194 204 228) , rgba(198, 194, 228, 0.3));
  }
  form{
    position:absolute;
    top:10px;
    left:15px;
    width:330px;
    height: 30px;
  }
  
  #input-message{
    background-color: #FFFFFF;
    width: 285px;
    height:25px;
    position: absolute;
    top:3px;
    left:5px;
    border-radius:10px;
    border:none;
  }
  
  .chatBody {
    height: 365px;
    width: 360px;
    position: absolute;
    top:60px;
    left:0;
    overflow-y: scroll;
  }
  
  .message p {
  color: rgb(0, 0, 0);
  margin: 15px 10px 15px 10px;
  
  }
  .message {
  max-width: 150px;
  word-wrap:break-word;
  box-sizing: content-box;
  }
  
  .messageRow {
    display: flex;
    justify-content: flex-end;
  }
  
  .messageRow.bot {
    justify-content: flex-start;
  }
  
  .userMessage{
    border-radius: 10px 0px 10px 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 50px;
    background-color:#f8e9f8;
  }
  
  .userAvatar{
  width: 30px;
  height:30px;
  border-radius: 50%;
  position: absolute;
  background-color:#f8e9f8;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
  }
  
  .botMessage{
    border-radius: 0px 10px 10px 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 50px;
    background-color:#def7f7;
  }
  .botAvatar{
  width: 30px;
  height:30px;
  border-radius: 50%;
  position: absolute;
  background-color:#def7f7;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
  }
  
  .chatBody::-webkit-scrollbar {
    width: 5px;
    height: 100%;
    margin: 0%;
    padding:0%;
  }
  
  .chatBody::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
  
  #submit:hover {
    opacity: 0.5;
  }
  
  
  .submit{
    display: flex;
    border:none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    padding: 0px;
    top:0px;
    left:300px;
    border:none;
    background: url('@/assets/send.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor:pointer;
  }
  
  .close-icon{
    width: 30px;
    height: 30px;
    position:absolute;
    top: 10px;
    left: 315px;
    cursor:pointer;
    z-index:1;
  }
  
  .header-decoration{
    position:absolute;
    width: 345px;
    height: 42px;
    top: 18px;
    left:0;
  }
  
  .btn{
    background-color:#a39da9;
  }
  </style>