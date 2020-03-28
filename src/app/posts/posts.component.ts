import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  display = false;
  myPost: Post = {
    title: '',
    body:''
  }
  posts: Post[] = [];
  constructor(private postService: PostService) { }


  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(){
    this.postService.getAll().subscribe((res: Post[]) => {
      this.posts = res;
    })
  }

savePost(){
  this.postService.persistPost(this.myPost)
  .subscribe((res: Post) =>{
    this.posts = [res,...this.posts]
    this.myPost = {
      title: '',
      body:''
    }
  })
}




destroyPost(id: number){

  Swal.fire({
    title: 'Are you sure to delete?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {

      console.log(id)
      this.postService.deletePost(id)
      .subscribe(() => {

        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          timer: 5000
        })

        this.posts = this.posts.filter((post) => post.id !== id)
      })


    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })



}


toggleForm(){
  this.display = !this.display
}

info


}

