-- AlterTable
ALTER TABLE `Post` ADD COLUMN `is_share` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `original_post_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_original_post_id_fkey` FOREIGN KEY (`original_post_id`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
