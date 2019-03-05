import { Component } from '@angular/core';
import { QuillModules } from 'ngx-quill';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quillConfig: QuillModules = {
    toolbar: {
      container: [
        ['bold', {'list': 'bullet'}],
      ]
    }
  };

  form: FormControl = this.fb.control('');

  constructor(private fb: FormBuilder) {
  }

  onContentChanged(event) {
    this.form.setValue(event.html);
  }

  onPaste(event) {
    console.info(event);
  }

  save() {
    console.info('Completed content of the editor is', this.form.value);
  }
}
