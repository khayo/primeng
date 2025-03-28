import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'options-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Tooltip is also configurable by using <i>tooltipOptions</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
        </div>
        <app-code [code]="code" selector="tooltip-options-demo"></app-code>
    `
})
export class OptionsDoc {
    tooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };

    code: Code = {
        basic: `<input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />`,

        html: `<div class="card flex justify-center">
    <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-options-demo',
    templateUrl: './tooltip-options-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipOptionsDemo {
    tooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };
}`
    };
}
