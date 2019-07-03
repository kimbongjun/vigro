<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/">
        <v-img 
        :src="require('./assets/logo.png')" 
        height="35"
        width="35"
        />
        </router-link>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(item,i) in menu" :key="i" :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/home'
import Blog from './components/blog'
import Services from './components/services'
import Contact from './components/contact'

export default {
  name: 'App',
  components: {
    Home,
    Blog,
    Services,
    Contact
  },
  data () {
    return {
      menu: [
        { icon: 'home', title: 'Home', link : '/'},
        { icon: 'blog', title: 'Blog', link : '/blog'},
        { icon: 'service', title: 'Services', link: Services},
        { icon: 'contact', title: 'Contact', link: Contact}
      ]
    }
  },
  methods : {
     menuItems () {
      return this.menu
    }
  }
}
</script>
