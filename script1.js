var arr=[];
function addtocollection(movietitle, rating, releasedate, poster) {
    var title = document.getElementById('collectiontitle').value;
    //console.log(title);
    var arr=collectionarray();
    //console.log(arr);
    var tit=settitle(title);
    var a = `<li>${movietitle}</li>`;
    console.log(arr.length);
    for(i=0;i<arr.length;i++)
    {
    	console.log(arr[i]);
    	if(tit==arr[i])
    	{
    var ul = document.getElementById(title);
    ul.innerHTML += a;
}
}
};