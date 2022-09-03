const express = require('express');
const { getARandomUser, getAllUser, saveAUser, updateUser, bulkUpdate, deleteUser } = require('../../controller/user.controller');
const { bulkUpdateMiddleware } = require('../../middleware/bulkUpdateMiddleware');
const { saveAUserMiddleware } = require('../../middleware/saveUserMiddleware');
const { updateUserMiddleware } = require('../../middleware/updateUserMiddleware');

const router = express.Router();

router.get('/random', getARandomUser);
router.get('/all', getAllUser);

router.post('/save', saveAUserMiddleware, saveAUser)

router.patch('/update/:id',updateUserMiddleware, updateUser)

router.patch('/bulk-update', bulkUpdateMiddleware, bulkUpdate);

router.delete('/delete/:id', deleteUser)


module.exports = router;
