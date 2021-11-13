export interface IArticlePreview {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    
    width: number;
    height: number;
    
    formats: {
      thumbnail: IPreviewFormat;
      large: IPreviewFormat;
      medium: IPreviewFormat;
      small: IPreviewFormat;
    };
    
    url: string;
    previewUrl: string;
    
    hash: string;
    ext: string;
    mime: string;
    size: number;
    
    provider: string;
    provider_metadata: string;
  
    created_at: string;
    updated_at: string;
  }
  
  // Not realy used
  export interface IPreviewFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string;
    url: string;
  }