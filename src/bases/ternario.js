const active = true;
let message = '';

if(active){
  message = 'Active'
}else{
  message = 'Inactive'
}

message = ( active ) ? 'Active' : 'Inactive';
message = active && 'Active'

console.log( message )