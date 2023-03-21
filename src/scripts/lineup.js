//https://wzxcaefniwwgggpebhbz.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eGNhZWZuaXd3Z2dncGViaGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NzE2ODgsImV4cCI6MTk5NDQ0NzY4OH0.bnekPU1htxCKraVVGX4o2mwA-S58i1jhIBmKNgc7qWc

fetch("https://wzxcaefniwwgggpebhbz.supabase.co/rest/v1/kune", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eGNhZWZuaXd3Z2dncGViaGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NzE2ODgsImV4cCI6MTk5NDQ0NzY4OH0.bnekPU1htxCKraVVGX4o2mwA-S58i1jhIBmKNgc7qWc",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(artist) {
  console.log(artist);
  //artist.forEach()
}

//function()
