import multer from 'multer';
import { Utils } from '../../../../@server/common/utils/utils';
import { nextConnectHandler } from '../../../../@server/infrastructure/handlers/next-connect.handler';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { AttachmentModule } from '../../../../@server/modules/support/attachment/attachment.module';
import { guardRoleAll } from '../../../../@server/modules/users/auth/guards/role-all.guard';

const moduleName = 'attachments'
let fileName: string

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: `./public/${moduleName}`,
    filename: (req, file, callback) => {
      fileName = Date.now() + '_' + file.originalname.replaceAll(' ', '_')
      callback(null, fileName)
    },
  }),
});

const attachmentHandler = nextConnectHandler

attachmentHandler.use(guardRoleAll)
attachmentHandler.use(uploadFile.array(`${moduleName}`));

attachmentHandler.post(async (req, res) => {
  if (!req.body.module) res.status(400).json(
    ApiRes.from(null, undefined, 'module should not be empty')
  );
  if (!fileName) res.status(400).json(
    ApiRes.from(null, undefined, `${moduleName} should not be empty`)
  );

  const module = AttachmentModule()

  const validFile = Utils.fileFilter(fileName)
  const fileUrl = `http://${req.headers.host}/${moduleName}/${validFile}`
  const attachment = await module.crud.create(fileUrl, { module: req.body.module })

  res.status(200).json(ApiRes.from(attachment));
});

export default attachmentHandler;

export const config = { api: { bodyParser: false } };