import aws from 'aws-sdk';
const { S3_ACCESS_KEY, S3_SECRET_ACCESS_KEY } = process.env;

const s3 = new aws.S3({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  region : 'ap-northeast-2'
});
  
export const uploadImage = async (path: string, fileName: string, fileExt: string): Promise<string> => {
  const param = {
    Bucket:'seoulforest-image',
    Key: path + fileName,
    ACL:'public-read',
    ContentType:`image/${fileExt}`
  }

  const s3Response = await s3.upload(param).promise();

  return s3Response.Location;
}