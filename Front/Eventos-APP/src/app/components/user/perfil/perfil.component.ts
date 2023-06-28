import { AccountService } from './../../../services/account.service';
import { UserUpdate } from './../../../models/identity/UserUpdate';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidatorField } from '@app/helpers/validatorField';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  public usuario = {} as UserUpdate;
  public file: File;
  public imagemURL = '';

  public get ehPalestrante(): boolean {
    return this.usuario.funcao === 'Palestrante';
  }

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
  }

  public serFormValue(usuario: UserUpdate): void {
    this.usuario = usuario;
    if (this.usuario.imagemURL)
      this.imagemURL = environment.apiURL + `resources/perfil/${this.usuario.imagemURL}`;
    else
      this.imagemURL = './assets/img/perfil.png';
  }

  onFileChange(ev: any): void {
    const reader = new FileReader();

    reader.onload = (event: any) => this.imagemURL = event.target.result;

    this.file = ev.target.files;
    reader.readAsDataURL(this.file[0]);

    this.uploadImagem();
  }

  uploadImagem(): void {
    this.spinner.show();
    this.accountService.postUpload(this.file).subscribe(
      () => {
        this.toastr.success('Imagem atualizada com Sucesso', 'Sucesso!');
      },
      (error: any) => {
        this.toastr.error('Erro ao fazer upload de imagem', 'Erro!');
        console.log(error);
      }
    ).add(() => this.spinner.hide());
  }
}
