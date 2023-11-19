const users=[];
export const addUser=({email,emailCredentials,socket.id})=>{
	
	const id=socket.id
   if(users)
   	let exist=socket.id.includes(users);
   if(exist)
   	return;
   else
   return	users.push({emailCredentials,id})
}