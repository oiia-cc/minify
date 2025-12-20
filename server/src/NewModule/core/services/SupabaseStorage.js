// newmodule/infra/BcryptHasher.js
class SupabaseStorage {
  constructor(BUCKET_TMP, supabase) {
    this.BUCKET_TMP = BUCKET_TMP;
    this.supabase = supabase;
  }

  uploadToTmp = async ({ tmpPath, buffer }) => {
    const result = await this.supabase.storage
      .from(this.BUCKET_TMP)
      .upload(tmpPath, buffer, { upsert: true });

    const { data, error } = result;

    if (error) {
      throw new Error('Uploaded to storage /tmp failed' + error);
    }

    return data;
  };
}

module.exports = { SupabaseStorage };
