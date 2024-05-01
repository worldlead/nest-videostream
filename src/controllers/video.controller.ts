import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseInterceptors, UploadedFiles, Put, Req, Res, Query } from "@nestjs/common";
import { Video } from "../model/video.schema"
import { VideoService } from "../video.service";
import { FileFieldsInterceptor, FilesInterceptor} from "@nestjs/platform-express";


@Controller('/api/v1/video')
export class VideoController {
    constructor(private readonly videoService: VideoService){}

    
}