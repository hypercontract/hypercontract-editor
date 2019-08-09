import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'hyper-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddResourceFormComponent {

    @ViewChild(FormGroupDirective)
    formGroup: FormGroupDirective;

    @Output()
    addResource = new EventEmitter();

    form = new FormGroup({

    });

    onSubmit(event: Event) {
        event.preventDefault();

        this.addResource.emit(this.form.value)

        // reset form via form group directive instead of form group
        // https://github.com/angular/components/issues/4190#issuecomment-305222426
        this.formGroup.resetForm();
    }

}
