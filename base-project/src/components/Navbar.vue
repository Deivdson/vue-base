<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/reports">Reports</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </template>
  
  <style scoped>
  nav {
    padding: 1rem;
    background-color: #ffffff;
    display: flex;
    justify-content: end;
    right: 0;
  }
  router-link {
    margin: 0 0.5rem;
  }
  </style>
  