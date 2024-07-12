import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class FeedbackCreateDto {
  @IsNumber()
  @IsNotEmpty()
  rating: number

  @IsString()
  @IsOptional()
  comments?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  chatId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class FeedbackUpdateDto {
  @IsNumber()
  @IsOptional()
  rating?: number

  @IsString()
  @IsOptional()
  comments?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  chatId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
