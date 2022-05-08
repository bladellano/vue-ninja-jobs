<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'job-details', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Lorem abc", id: 1, details: "Lorem ipsum is simply" },
        { title: "Lorem def", id: 2, details: "Lorem ipsum is simply" },
        { title: "Lorem ghi", id: 3, details: "Lorem ipsum is simply" },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}
</style>