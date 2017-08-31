import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";
  constructor(private http: Http) { }

  getArtistas(termino: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer BQB_AVL_MHH2FKBXtzRk0JdOQmRl9bN4fOD11BIt91npX5Bdx7HWtjEDSpZtjM6NMI3pl_tiri_Ndv4n_XxWhQ');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
      .map(res => {
        //console.log(this.artistas);
        this.artistas = res.json().artists.items;
        //return res.json().artists.items;
      })
  }
  getArtista(id: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer BQB_AVL_MHH2FKBXtzRk0JdOQmRl9bN4fOD11BIt91npX5Bdx7HWtjEDSpZtjM6NMI3pl_tiri_Ndv4n_XxWhQ');
    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
    .map(res => {
      //console.log(res.json());
        return res.json();
        //return res.json().artists.items;
      })
  }

  getTop(id: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer BQB_AVL_MHH2FKBXtzRk0JdOQmRl9bN4fOD11BIt91npX5Bdx7HWtjEDSpZtjM6NMI3pl_tiri_Ndv4n_XxWhQ');
    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json().tracks);
        return res.json().tracks;
        //return res.json().artists.items;
      })
  }

}
