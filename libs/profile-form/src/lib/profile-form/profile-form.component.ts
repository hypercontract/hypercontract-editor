import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Vocabulary } from '../vocabulary.model';

@Component({
    selector: 'hyper-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent {

    vocabularies: Vocabulary[] = [];

    onAddVocabulary(vocabulary: Vocabulary) {
        this.vocabularies = [
            ...this.vocabularies,
            vocabulary
        ];
    }

}
