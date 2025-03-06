<script setup>
import { ref } from 'vue';

const isMorse = ref(true);
const toggleMorse = () => {
  isMorse.value = !isMorse.value;
};
</script>

<template>
  <div class="landing">
    <div class="left">
        <div class="introimg">
          <img src="../assets/imgs/profile.jpg" alt="">
          <div class="morsecode" @click="toggleMorse">
            {{ isMorse ? '-.- . -. -. . - ....' : 'kenneth' }}
          </div>
        </div>
    </div>
    <div class="right">
      <h1>Welcome to My Portfolio</h1>
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
  <div class="skills">
    <h2>Skills</h2>
    <div class="skill-bar">
      <div class="skill-info"> <span>Python</span> <span>50%</span> </div>
      <div class="progress-bar"><div class="progress" style="width: 50%"></div>
      </div>
    </div>
    <div class="skill-bar">
      <div class="skill-info"> <span>HTML $ CSS</span> <span>90%</span> </div>
      <div class="progress-bar"><div class="progress" style="width: 90%"></div>
      </div>
    </div>
    <div class="skill-bar">
      <div class="skill-info"> <span>JS</span> <span>20%</span> </div>
      <div class="progress-bar"><div class="progress" style="width: 20%"></div>
      </div>
    </div>
    <div class="skill-bar">
      <div class="skill-info"> <span>Java</span> <span>30%</span> </div>
      <div class="progress-bar"><div class="progress" style="width: 30%"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 3rem;
  min-height: 85vh;
  align-items: center;
  justify-content: space-between;
  max-width: auto;
  margin: 0 auto;
}

.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}

.right h1 {
  color: #ffffff;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.right p {
  color: #e0e0e0;
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
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
}

.aboutme p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #e0e0e0;
  font-size: 1.1rem;
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

.comment-link {
  
  font-weight: bold;
  font-size: 25px;
  color: #000000;
}
.linktag{
  font-family: 'Times New Roman', Times, serif;
}
.skills {
  margin: 4rem auto;
  padding: 3rem;
  background: linear-gradient(145deg, #131313, #1c1c1c);
  color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  max-width: 1000px;
}

.skills h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.skill-bar {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
  font-size: 1.1rem;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #2a2a2a;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #39c0ff, #0b5586);
  border-radius: 5px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .skills {
    margin: 2rem 1rem;
    padding: 2rem;
  }

  .skills h2 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>