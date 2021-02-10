import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
          label: 'Dashboard',
          icon:'pi pi-fw pi-file',
          items: [
              {
                  label: 'New',
                  icon:'pi pi-fw pi-plus',
                  items: [
                      {
                      label: 'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                      },
                      {
                      label: 'Video',
                      icon:'pi pi-fw pi-video'
                      }
                  ]
              },
              {
                  label: 'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  label: 'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
          },
          {
          label: 'Vehicle Registration',
          icon:'pi pi-fw pi-pencil',
          items: [
              {
                  label: 'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon:'pi pi-fw pi-align-justify'
              }
          ]
          },
          {
          label: 'Role management',
          icon:'pi pi-fw pi-user',
          items: [
              {
                  label: 'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label: 'Delete',
                  icon:'pi pi-fw pi-user-minus',
              },
              {
                  label: 'Search',
                  icon:'pi pi-fw pi-users',
                  items: [
                      {
                      label: 'Filter',
                      icon:'pi pi-fw pi-filter',
                      items: [
                          {
                              label: 'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                      },
                      {
                      icon:'pi pi-fw pi-bars',
                      label: 'List'
                      }
                  ]
              }
          ]
          },
          {
          label: 'Employee',
          icon:'pi pi-fw pi-calendar',
          items: [
              {
                  label: 'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items: [
                      {
                      label: 'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                      },
                      {
                      label: 'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items: [
                      {
                      label: 'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
          }
      ]
  }

  
}
