/**
 * @openapi
 * /apigetspecialties:
 *   get:
 *     summary: Retrieve all medical specialties
 *     description: Returns a list of all medical specialties from the database.
 *     responses:
 *       '200':
 *         description: A list of medical specialties
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier of the specialty
 *                   name:
 *                     type: string
 *                     description: The name of the specialty
 *                   description:
 *                     type: string
 *                     description: A description of the specialty
 *       '500':
 *         description: Error retrieving data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message
 */