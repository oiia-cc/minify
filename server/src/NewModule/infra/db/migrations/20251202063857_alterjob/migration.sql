/*
  Warnings:

  - A unique constraint covering the columns `[job_uuid]` on the table `jobs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "jobs_job_uuid_key" ON "jobs"("job_uuid");
