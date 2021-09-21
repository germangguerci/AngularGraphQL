import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const ADD_PRODUCTOR = gql`
  mutation AddProductor($nombre: String!) {
    addProductor(nombre: $nombre) {
      nombre
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProductorService {
  constructor(private apollo: Apollo) {}

  createProductor(productor: any) {
    const { nombre, localidad, descripcionBreve } = productor;
    this.apollo
      .mutate({
        mutation: ADD_PRODUCTOR,
        variables: {
          nombre,
          localidad,
          descripcionBreve,
        },
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
        (error) => {
          console.log('there was an error sending the query', error);
        }
      );
  }
}
