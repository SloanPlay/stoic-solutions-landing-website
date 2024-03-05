<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Live Demo</h1>
              <h1 class="font-weight-light">
                Experience Our Services Firsthand! Explore our live demos to see our solutions in action. Witness how our services can transform your business and elevate your operations. Schedule a demo today and discover the power of our innovative offerings
              </h1>
              
              <v-btn rounded outlined href="http://ramirak.com/SA/" target="_blank" large color="white" class="mt-4" >   
                Sherlock
              </v-btn>

              <v-btn rounded outlined href="http://ramirak.com/Tailor/logon/login.aspx" target="_blank" large color="white" class="mt-4 ml-4">                
                Tailor
              </v-btn>

              <v-btn rounded outlined href="http://localhost:4200/" target="_blank" large color="white" class="mt-4 ml-4">                
                Onboarding
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>