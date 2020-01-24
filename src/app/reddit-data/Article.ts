export class Article{
  title : string;
  link : string ;
  votes : number;
  constructor(title:string,link:string,votes?:number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteup(){
    this.votes +=1;
    console.log("vote up in class")
    return false;
  }
  votedown(){
    this.votes -=1;
    return false;
  }
  domain(){
    try {
      const domainAndPath = (this.link as string).split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
