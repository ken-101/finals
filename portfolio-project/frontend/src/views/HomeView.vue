<script setup>
import { ref } from 'vue';

const isMorse = ref(true);
const isOpen = ref(false);

const toggleMorse = () => {
  isMorse.value = !isMorse.value;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const images = [
  { src: '/src/assets/bg/gun.png', alt: 'Gun 1' },
  { src: '/src/assets/bg/gun.png', alt: 'Gun 1' },
  { src: '/src/assets/bg/gun.png', alt: 'Gun 1' },
  { src: '/src/assets/bg/gun.png', alt: 'Gun 1' },
];
</script>

<template>
  <div class="landing">
    <!-- Existing code remains the same -->
    <div class="left">
        <div class="introimg">
          <img src="../assets/imgs/profile.jpg" alt="">
          <div class="morsecode" @click="toggleMorse">
            {{ isMorse ? '-.- . -. -. . - ....' : 'kenneth' }}
          </div>
        </div>
    </div>
    <div class="right">
      <h1>Welcome to My Portfolio <span>ฅ^•ﻌ•^ฅ</span></h1>
      <p class="linktag">Explore my projects and feel free to leave a comment <router-link to="/comments" class="comment-link"> Here !</router-link></p>
    </div>
  </div>
  <div class="aboutme">
    <h2>About Me</h2>
    <p>
      I am a passionate developer with a focus on creating innovative solutions.
      I love to learn new things and I am always looking for new challenges.
    </p>
    <p>
      In my free time, I like to play video games and I am also a fan of
      anime/manga.
    </p>
  </div>
  <div class="display1">
    <div class="skills">
      <h2>Skills</h2>
      <div class="skill-bar">
        <div class="skill-info"> <img src="../assets/icons/python.png" alt=""> <span>Python</span> <span>50%</span> </div>
        <div class="progress-bar"><div class="progress" style="width: 50%"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info"> <div class="in"> <img src="../assets/icons/html.png" alt=""> & <img src="../assets/icons/css.png" alt=""></div> <span>HTML $ CSS</span> <span>90%</span> </div>
        <div class="progress-bar"><div class="progress" style="width: 90%"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info"> <img src="../assets/icons/js.png" alt=""> <span>JS</span> <span>20%</span> </div>
        <div class="progress-bar"><div class="progress" style="width: 20%"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info"> <img src="../assets/icons/java.png" alt=""> <span>Java</span> <span>30%</span> </div>
        <div class="progress-bar"><div class="progress" style="width: 30%"></div>
        </div>
      </div>
    </div>
    <div class="dropdown-container">
      <button @click="toggleDropdown" class="dropdown-button">
        Weapons {{ isOpen ? '⬆' : '⬇' }}
      </button>
      <transition name="dropdown">
        <div v-if="isOpen" class="dropdown-menu">
          <ul>
            <li v-for="(item, index) in images" :key="index">
              <transition name="fade" :delay="index * 100">
                <img :src="item.src" :alt="item.alt" />
              </transition>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Keep all existing styles */




.landing {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 3rem;
  min-height: 85vh;
  align-items: center;
  justify-content: space-evenly;
  max-width: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.landing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(41, 21, 223, 0.1), rgba(255, 0, 255, 0.1));
  pointer-events: none;
  z-index: -1;
}
.introimg {
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}
.introimg img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}
.introimg img:hover {
  transform: scale(1.02);
  box-shadow: 0 0 15px #4facfe, 0 0 30px rgba(255, 0, 255, 0.5);
  transition: all 0.3s ease;
}

.right h1 {
  color: #ffffff;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 0 10px #4facfe, 0 0 20px #4facfe, 0 0 30px #4facfe;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #4facfe, 0 0 20px #4facfe, 0 0 30px #4facfe;
  }
  to {
    text-shadow: 0 0 20px #4facfe, 0 0 30px #4facfe, 0 0 40px #ff00ff;
  }
}

.morsecode {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 26, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  color: #ffffff;
  font-size: 1rem;
  box-shadow: 0 0 15px #4facfe, 0 0 30px rgba(255, 0, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.morsecode:hover {
  transform: translateX(-50%) translateY(-5px);
  box-shadow: 0 0 20px #4facfe, 0 0 40px rgba(255, 0, 255, 0.7);
}

.aboutme, .skills {
  margin: 30px auto;
  padding: 3rem;
  background: linear-gradient(145deg, rgba(19, 19, 19, 0.8), rgba(28, 28, 28, 0.8));
  color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(79, 172, 254, 0.3);
  backdrop-filter: blur(10px);
  min-width: 300px;
  max-width: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #4facfe, #00f2fe, #ff00ff);
  border-radius: 5px;
  transition: width 1s ease-in-out;
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

.comment-link {
  font-weight: bold;
  font-size: 25px;
  color: #4facfe;
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
  transition: all 0.3s ease;
}

.comment-link:hover {
  color: #fe4fef;
  text-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
}

.right p {
  color: #e0e0e0;
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}



.morsecode {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a1a;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  color: #ffffff;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.morsecode:hover {
  transform: translateX(-50%) translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.aboutme {
  margin: 4rem auto;
  padding: 3rem;
  background: linear-gradient(145deg, #131313, #1c1c1c);
  color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  max-width: 1000px;
}

.aboutme h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, rgb(255, 54, 114), violet, blue);
  background-size: 200% 100%;
  -webkit-background-clip: text;  
  background-clip: text; 
  color: transparent; 
  animation: gradientMove 2s infinite alternate-reverse;
}

.aboutme p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #e0e0e0;
  font-size: 1.1rem;
}
.display1{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 ;
}
.dropdown-container {
  width: 350px;
  background: #121212;
  color: white;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}
.dropdown-button {
  width: 100%;
  padding: 10px;
  background: #4facfe;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
}

.dropdown-button:hover {
  background: #ff00ff;
  color: black;
}

.dropdown-menu {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.dropdown-menu li {
  padding: 8px;
  transition: 0.3s;
  cursor: pointer;
}

.dropdown-menu img {
  width: 100%;
  max-width: 100px;
  border-radius: 5px;
  border: 2px solid rgba(255, 0, 255, 0.3);
  transition: transform 0.2s ease-in-out;
}

.dropdown-menu img:hover {
  transform: scale(1.1);
  border-color: #ff00ff;
}

/* Animation classes */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease;
  max-height: 1000px;
  opacity: 1;
  transform-origin: top;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.comment-link {
  
  font-weight: bold;
  font-size: 45px;
  background: linear-gradient(90deg, #fe4f4f, #00f2fe, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.linktag{
  font-family: 'Times New Roman', Times, serif;
}
.skills {
  text-align: center;
  padding: 20px;
  color: white;
  font-family: 'Orbitron', sans-serif;
  max-width: 600px;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(57, 192, 255, 0.2);
}

.skills h2 {
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
  background: linear-gradient(45deg, rgb(255, 249, 255), #a6b7be);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 15px rgba(212, 212, 212, 0.8),
               0 0 25px rgba(250, 250, 250, 0.8);
}

@keyframes titleGlow {
  from {
    text-shadow: 0 0 15px rgba(255, 0, 255, 0.8),
                 0 0 25px rgba(57, 192, 255, 0.8);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 0, 255, 1),
                 0 0 35px rgba(57, 192, 255, 1);
  }
}

.skill-bar {
  margin: 25px 0;
  padding: 15px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.skill-bar:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  margin-bottom: 10px;
}

.skill-info span {
  font-weight: bold;
  letter-spacing: 1px;
}
.in{
  display: flex;
  justify-content: center;
  align-items: center;
}
.progress-bar {
  width: 100%;
  height: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #39c0ff);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
  border-radius: 10px;
  
  animation: progressGlow 2.5s ease-in-out forwards;
}

/* Add staggered delays to each skill bar */
.skill-bar:nth-child(2) .progress::after {
  animation-delay: 0.3s;
}

.skill-bar:nth-child(3) .progress::after  {
  animation-delay: 2.6s;
}

.skill-bar:nth-child(4) .progress::after  {
  animation-delay: 0.9s;
}

.skill-bar:nth-child(5) .progress::after  {
  animation-delay: 1.2s;
}

.progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0) 100%);
  animation: shimmer 5s infinite alternate-reverse;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes progressGlow {
  0% {
    width: 0;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.8),
                0 0 30px rgba(57, 192, 255, 0.6);
  }
}
@media (min-width: 768px) {
  .skill-bar{
    width: 500px;
  }
}
@media (max-width: 768px) {
  .landing {
    flex-direction: column-reverse;
    text-align: center;
    padding: 110px 1rem 2rem;
    gap: 2rem;
  }

  .left, .right {
    padding: 1rem;
  }

  .right {
    align-items: center;
  }

  .right h1 {
    font-size: 2.8rem;
    text-align: center;
  }

  .right p {
    text-align: center;
    font-size: 1.2rem;
  }

  .introimg {
    margin: 1rem auto;
    max-width: 350px;
  }
  .introimg img{
    object-fit: cover;
    object-position: top;
    height: 300px;
  }

  .aboutme {
    margin: 2rem 1rem;
    padding: 2rem;
  }

  .aboutme h2 {
    font-size: 2rem;
    text-align: center;
    
  }

  .aboutme p {
    text-align: center;
  }
}



@media (max-width: 768px) {
  .skills {
    padding: 15px;
    margin: 10px;
  }

  .skills h2 {
    font-size: 24px;
  }

  .skill-info {
    font-size: 16px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .progress-bar {
    height: 12px;
  }

  .progress {
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.6);
  }

  .skill-bar {
    margin: 15px 0;
    padding: 10px;
  }
}
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.gradient-background {
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, pink, violet, blue);
  background-size: 300% 100%; /* To make the gradient larger than the container */
  animation: gradientMove 5s linear infinite; /* 5s duration, linear speed, infinite loop */
}

</style>