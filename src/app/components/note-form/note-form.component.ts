import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/interfaces/note.model';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;

  noteForm = this.formBuilder.group({
    title: '',
    content: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private contentDatabaseService: ContentDatabaseService
  ) {
    // Focus on the content field when the form is loaded
    setTimeout(() => {
      document.getElementById('note-content')?.focus();
    }, 0);
  }

  onSubmit(): void {
    console.log(
      this.contentDatabaseService
        .addNote(this.noteForm.value as Note)
        .subscribe((data) => console.log(data))
    );
  }
}
