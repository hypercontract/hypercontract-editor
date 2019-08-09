import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Vocabulary } from '../../vocabulary.model';

const prefixPattern = /^[a-zA-Z][a-zA-Z0-9]*$/;
const namespaceUriPattern = /^\w+:(\/?\/?)[^\s]+$/;

@Component({
  selector: 'hyper-add-vocabulary-form',
  templateUrl: './add-vocabulary-form.component.html',
  styleUrls: ['./add-vocabulary-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddVocabularyFormComponent {

    @ViewChild(FormGroupDirective)
    formGroup: FormGroupDirective;

    @Output()
    addVocabulary = new EventEmitter<Vocabulary>();

    form = new FormGroup({
        prefix: new FormControl('shop', [
            Validators.required,
            Validators.pattern(prefixPattern)
        ]),
        namespaceUri: new FormControl('https://example.hypercontract.org/', [
            Validators.required,
            Validators.pattern(namespaceUriPattern)
        ])
    });

    onSubmit(event: Event) {
        event.preventDefault();

        this.addVocabulary.emit(this.form.value)

        // reset form via form group directive instead of form group
        // https://github.com/angular/components/issues/4190#issuecomment-305222426
        this.formGroup.resetForm();
    }

}
