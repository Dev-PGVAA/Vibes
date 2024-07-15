import { Injectable } from '@nestjs/common'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'
import { slugify } from 'src/utils/slugify/slugify'
import { FileResponse } from './dto/file.response'

@Injectable()
export class FilesService {
	async createFiles(
		files: Express.Multer.File[],
		folder: string = 'default'
	): Promise<FileResponse[]> {
		const slugFolder = slugify(folder)
		const uploadFolder = `${path}/uploads/${slugFolder}`
		await ensureDir(uploadFolder)
		const res: FileResponse[] = await Promise.all(
			files.map(async file => {
				const slugName = slugify(file.originalname)
				await writeFile(`${uploadFolder}/${slugName}`, file.buffer)
				return {
					url: `/uploads/${slugFolder}/${slugName}`,
					name: slugName
				}
			})
		)

		return res
	}
}
